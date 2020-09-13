const NEXT = 'next';
const PREV = 'prev';

class Splitter {
    constructor(har, reporter) {
        console.log("SPLITTER CONSTRUCTOR");
        this.har = har;
        this.entries = har.log.entries;
        this.entriesCount = Object.keys(har.log.entries).length;
        this.chunkSize = 5;
        this.currentStart = 0;
        this.filterStart = 0;
        this.lastFilters = '';
        this.reporter = reporter;
    }

    filter(filters, direction = '') {
        if (this.lastFilters !== filters) {
            this.filterStart = 0;
            this.lastFilters = filters;
        }
        if (filters) {
            const tokens = filters
                .trim()
                .split(/\s|,/)
                .filter((token) => token.length > 0);
            const groups = tokens.reduce(
                (res, token) => {
                    const item = token.trim();
                    if (item.length > 1) {
                        if (item.startsWith("-")) {
                            res.negative.push(item.substring(1));
                        } else if (item.startsWith("+")) {
                            res.positive.push(item.substring(1));
                        } else {
                            res.positive.push(item);
                        }
                    }
                    return res;
                },
                {negative: [], positive: []}
            );

            console.log(
                "include criteria",
                `(${groups.positive.join("|")})`,
                "exclude criteria",
                `(${groups.negative.join("|")})`
            );
            const filteredEntries = this.entries.filter((entry) => {
                if (groups.negative?.length > 0 && groups.positive?.length > 0) {
                    return (
                        groups.negative.some(
                            (excl) => entry.request?.url.indexOf(excl) === -1
                        ) &&
                        groups.positive.some(
                            (incl) => entry.request?.url.indexOf(incl) > -1
                        )
                    );
                } else if (
                    groups.negative?.length > 0 &&
                    groups.positive?.length === 0
                ) {
                    return groups.negative.some(
                        (excl) => entry.request.url.indexOf(excl) === -1
                    );
                } else if (
                    groups.negative?.length === 0 &&
                    groups.positive?.length > 0
                ) {
                    return groups.positive.some(
                        (incl) => entry.request.url.indexOf(incl) > -1
                    );
                } else {
                    return true;
                }
            });

            if (direction === NEXT) {
                const nextStart = this.filterStart + this.chunkSize;
                if (nextStart < filteredEntries.length) {
                    const slice = filteredEntries.slice(nextStart, (nextStart + this.chunkSize));
                    this.reporter.report(nextStart, (nextStart + this.chunkSize), filteredEntries.length)
                    this.filterStart = nextStart
                    return slice;
                } else {
                    const slice = filteredEntries.slice(this.filterStart, filteredEntries.length);
                    this.reporter.report(this.filterStart, filteredEntries.length, filteredEntries.length)
                    this.filterStart = filteredEntries.length;
                    return slice;
                }
            } else if (direction === PREV) {
                const prevStart = (this.filterStart - this.chunkSize);
                if (prevStart > 0) {
                    const slice = filteredEntries.slice(prevStart, this.filterStart);
                    this.reporter.report(prevStart, this.filterStart, filteredEntries.length)
                    this.filterStart = prevStart
                    return slice;
                } else {
                    const slice = filteredEntries.slice(0, this.filterStart);
                    this.reporter.report(0, this.filterStart, filteredEntries.length)
                    this.filterStart = 0;
                    return slice;
                }
            } else {
                const endSlice = (this.filterStart + this.chunkSize);
                if (endSlice < filteredEntries.length) {
                    const slice = filteredEntries.slice(this.currentStart, endSlice)
                    this.reporter.report(this.filterStart, endSlice, filteredEntries.length)
                    return slice;
                } else {
                    const slice = filteredEntries.slice(this.filterStart, filteredEntries.length);
                    this.reporter.report(this.filterStart, filteredEntries.length, filteredEntries.length)
                    return slice;
                }
            }
        } else {
            const endSlice = (this.currentStart + this.chunkSize);
            if (endSlice < this.entriesCount) {
                const slice = this.entries.slice(this.currentStart, endSlice)
                this.reporter.report(this.currentStart, endSlice, this.entriesCount)
                return slice;
            } else {
                const slice = this.entries.slice(this.currentStart, this.entriesCount);
                this.reporter.report(this.currentStart, this.entriesCount, this.entriesCount)
                return slice;
            }
        }
    }

    next(filters) {
        if (filters) {
            return this.filter(filters, NEXT);
        } else {
            const nextStart = (this.currentStart + this.chunkSize);
            if (nextStart < this.entriesCount) {
                const slice = this.entries.slice(nextStart, (nextStart + this.chunkSize));
                this.reporter.report(nextStart, (nextStart + this.chunkSize), this.entriesCount)
                this.currentStart = nextStart
                return slice;
            } else {
                const slice = this.entries.slice(this.currentStart, this.entriesCount);
                this.reporter.report(this.currentStart, this.entriesCount, this.entriesCount)
                this.currentStart = this.entriesCount;
                return slice;
            }
        }
    }

    prev(filters) {
        if (filters) {
            return this.filter(filters, PREV);
        } else {
            const prevStart = (this.currentStart - this.chunkSize);
            if (prevStart >= 0) {
                const slice = this.entries.slice(prevStart, this.currentStart);
                this.reporter.report(prevStart, this.currentStart, this.entriesCount)
                this.currentStart = prevStart
                return slice;
            } else {
                const slice = this.entries.slice(0, this.currentStart);
                this.reporter.report(0, this.currentStart, this.entriesCount)
                this.currentStart = 0;
                return slice;
            }
        }
    }

    reset() {
        this.currentStart = 0;
        this.filterStart = 0;
        this.lastFilters = '';
        return {
            ...this.har,
            log: {
                ...this.har.log,
                entries: this.next(),
            },
        };
    }

    state(entries) {
        return {
            ...this.har,
            log: {
                ...this.har.log,
                entries,
            },
        };
    }
}

export default Splitter;
