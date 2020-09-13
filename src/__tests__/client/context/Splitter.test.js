import Splitter from '../../../../src/client/context/Splitter';
import {har} from "../../../../src/client/store";

describe("Testing filter, next and prev functionality inside the splitter", () => {

    const reporter = {
        report: (val) => {
        },
        register: (listener) => {
        },
    };

    test("Without filters, next and prev should cancel their effect", () => {
        const splitter = new Splitter(har, reporter)

        let result = splitter.filter();
        expect(result.length).toBe(5)
        expect(result[0].pageref).toBe("page_9")

        result = splitter.next();
        expect(result.length).toBe(5)
        expect(result[0].pageref).toBe("page_8")

        result = splitter.prev();
        expect(result.length).toBe(5)
        expect(result[0].pageref).toBe("page_9")
    })


    test("With filter, next and prev should cancel their effect", () => {
        const splitter = new Splitter(har, reporter)
        const filters = "css js";

        let result = splitter.filter(filters);
        expect(result.length).toBe(5)
        expect(result[0].request.url).toBe("https://zing.jewelersmutual.com/runtime.e254055113b4a07217f4.js")

        result = splitter.next(filters);
        expect(result.length).toBe(5)
        expect(result[0].request.url).toBe("https://js.hs-analytics.net/analytics/1599624900000/413440.js")

        result = splitter.prev(filters);
        expect(result.length).toBe(5)
        expect(result[0].request.url).toBe("https://zing.jewelersmutual.com/runtime.e254055113b4a07217f4.js")
    })

    test("With filter, next should return nothing if it's the end of a search", () => {
        const splitter = new Splitter(har, reporter)
        const filters = "/Login";

        let result = splitter.filter(filters);
        expect(result.length).toBe(2)
        expect(result[0].request.url).toBe("https://identity.platform.jewelersmutual.com/Account/Login");

        result = splitter.next(filters);
        expect(result.length).toBe(2)
        expect(result[0].request.url).toBe("https://identity.platform.jewelersmutual.com/Account/Login");

        result = splitter.next(filters);
        expect(result.length).toBe(0)
    })

    test("With filter, prev should return nothing if it's the start of a search", () => {
        const splitter = new Splitter(har, reporter)
        const filters = "css js";

        let result = splitter.filter(filters);
        expect(result.length).toBe(5)
        expect(result[1].request.url).toBe("https://use.fontawesome.com/releases/v5.5.0/css/all.css")

        result = splitter.prev(filters);
        expect(result.length).toBe(0)
    })
})