"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.post = exports.get = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const toUrl = (url) => {
    try {
        return typeof url === 'string' ? new URL(url) : url;
    }
    catch (error) {
        console.error(`Invalid URL : ${typeof url === 'string' ? url : url.href}`);
        throw error;
    }
};
const get = (url, params = null, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const cleanedUrl = toUrl(url);
    const requestOptions = {
        method: 'GET',
        headers
    };
    if (params != null) {
        Object.keys(params)
            .forEach(key => {
            cleanedUrl.searchParams.append(key, params[key]);
        });
    }
    return yield (0, cross_fetch_1.default)(cleanedUrl.href, requestOptions);
});
exports.get = get;
const post = (url, params = {}, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const cleanedUrl = toUrl(url);
    const requestOptions = {
        method: 'POST',
        headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
        body: JSON.stringify(params)
    };
    return yield (0, cross_fetch_1.default)(cleanedUrl.href, requestOptions);
});
exports.post = post;
const put = (url, params = {}, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const cleanedUrl = toUrl(url);
    const requestOptions = {
        method: 'PUT',
        headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
        body: JSON.stringify(params)
    };
    return yield (0, cross_fetch_1.default)(cleanedUrl.href, requestOptions);
});
exports.put = put;
const del = (url, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const cleanedUrl = toUrl(url);
    const requestOptions = {
        method: 'DELETE',
        headers
    };
    return yield (0, cross_fetch_1.default)(cleanedUrl.href, requestOptions);
});
exports.del = del;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQStCO0FBSS9CLE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBaUIsRUFBTyxFQUFFO0lBQ3ZDLElBQUk7UUFDRixPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtLQUNwRDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzFFLE1BQU0sS0FBSyxDQUFBO0tBQ1o7QUFDSCxDQUFDLENBQUE7QUFFTSxNQUFNLEdBQUcsR0FBRyxDQUFPLEdBQWlCLEVBQUUsU0FBOEIsSUFBSSxFQUFFLE9BQXNCLEVBQXFCLEVBQUU7SUFDNUgsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRTdCLE1BQU0sY0FBYyxHQUFHO1FBQ3JCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTztLQUNSLENBQUE7SUFFRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2xELENBQUMsQ0FBQyxDQUFBO0tBQ0w7SUFFRCxPQUFPLE1BQU0sSUFBQSxxQkFBSyxFQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUE7QUFDckQsQ0FBQyxDQUFBLENBQUE7QUFoQlksUUFBQSxHQUFHLE9BZ0JmO0FBRU0sTUFBTSxJQUFJLEdBQUcsQ0FBTyxHQUFpQixFQUFFLFNBQWMsRUFBRSxFQUFFLE9BQXNCLEVBQXFCLEVBQUU7SUFDM0csTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRTdCLE1BQU0sY0FBYyxHQUFHO1FBQ3JCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxrQkFDTCxjQUFjLEVBQUUsa0JBQWtCLElBQy9CLE9BQU8sQ0FDWDtRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztLQUM3QixDQUFBO0lBQ0QsT0FBTyxNQUFNLElBQUEscUJBQUssRUFBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFBO0FBQ3JELENBQUMsQ0FBQSxDQUFBO0FBWlksUUFBQSxJQUFJLFFBWWhCO0FBRU0sTUFBTSxHQUFHLEdBQUcsQ0FBTyxHQUFpQixFQUFFLFNBQWMsRUFBRSxFQUFFLE9BQXNCLEVBQXFCLEVBQUU7SUFDMUcsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRTdCLE1BQU0sY0FBYyxHQUFHO1FBQ3JCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxrQkFDTCxjQUFjLEVBQUUsa0JBQWtCLElBQy9CLE9BQU8sQ0FDWDtRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztLQUM3QixDQUFBO0lBQ0QsT0FBTyxNQUFNLElBQUEscUJBQUssRUFBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFBO0FBQ3JELENBQUMsQ0FBQSxDQUFBO0FBWlksUUFBQSxHQUFHLE9BWWY7QUFFTSxNQUFNLEdBQUcsR0FBRyxDQUFPLEdBQWlCLEVBQUUsT0FBc0IsRUFBcUIsRUFBRTtJQUN4RixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFFN0IsTUFBTSxjQUFjLEdBQUc7UUFDckIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsT0FBTztLQUNSLENBQUE7SUFDRCxPQUFPLE1BQU0sSUFBQSxxQkFBSyxFQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUE7QUFDckQsQ0FBQyxDQUFBLENBQUE7QUFSWSxRQUFBLEdBQUcsT0FRZiJ9