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
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.post = exports.get = void 0;
const toUrl = (url) => typeof url === 'string' ? new URL(url) : url;
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
    return yield fetch(cleanedUrl.href, requestOptions);
});
exports.get = get;
const post = (url, params = {}, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const cleanedUrl = toUrl(url);
    const requestOptions = {
        method: 'POST',
        headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
        body: JSON.stringify(params)
    };
    return yield fetch(cleanedUrl.href, requestOptions);
});
exports.post = post;
const put = (url, params = {}, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const cleanedUrl = toUrl(url);
    const requestOptions = {
        method: 'PUT',
        headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
        body: JSON.stringify(params)
    };
    return yield fetch(cleanedUrl.href, requestOptions);
});
exports.put = put;
const del = (url, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const cleanedUrl = toUrl(url);
    const requestOptions = {
        method: 'DELETE',
        headers
    };
    return yield fetch(cleanedUrl.href, requestOptions);
});
exports.del = del;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFpQixFQUFPLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7QUFFL0UsTUFBTSxHQUFHLEdBQUcsQ0FBTyxHQUFpQixFQUFFLFNBQThCLElBQUksRUFBRSxPQUFzQixFQUFxQixFQUFFO0lBQzVILE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUU3QixNQUFNLGNBQWMsR0FBRztRQUNyQixNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU87S0FDUixDQUFBO0lBRUQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNiLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNsRCxDQUFDLENBQUMsQ0FBQTtLQUNMO0lBRUQsT0FBTyxNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFBO0FBQ3JELENBQUMsQ0FBQSxDQUFBO0FBaEJZLFFBQUEsR0FBRyxPQWdCZjtBQUVNLE1BQU0sSUFBSSxHQUFHLENBQU8sR0FBaUIsRUFBRSxTQUFjLEVBQUUsRUFBRSxPQUFzQixFQUFxQixFQUFFO0lBQzNHLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUU3QixNQUFNLGNBQWMsR0FBRztRQUNyQixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sa0JBQ0wsY0FBYyxFQUFFLGtCQUFrQixJQUMvQixPQUFPLENBQ1g7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7S0FDN0IsQ0FBQTtJQUNELE9BQU8sTUFBTSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQTtBQUNyRCxDQUFDLENBQUEsQ0FBQTtBQVpZLFFBQUEsSUFBSSxRQVloQjtBQUVNLE1BQU0sR0FBRyxHQUFHLENBQU8sR0FBaUIsRUFBRSxTQUFjLEVBQUUsRUFBRSxPQUFzQixFQUFxQixFQUFFO0lBQzFHLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUU3QixNQUFNLGNBQWMsR0FBRztRQUNyQixNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sa0JBQ0wsY0FBYyxFQUFFLGtCQUFrQixJQUMvQixPQUFPLENBQ1g7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7S0FDN0IsQ0FBQTtJQUNELE9BQU8sTUFBTSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQTtBQUNyRCxDQUFDLENBQUEsQ0FBQTtBQVpZLFFBQUEsR0FBRyxPQVlmO0FBRU0sTUFBTSxHQUFHLEdBQUcsQ0FBTyxHQUFpQixFQUFFLE9BQXNCLEVBQXFCLEVBQUU7SUFDeEYsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRTdCLE1BQU0sY0FBYyxHQUFHO1FBQ3JCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE9BQU87S0FDUixDQUFBO0lBQ0QsT0FBTyxNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFBO0FBQ3JELENBQUMsQ0FBQSxDQUFBO0FBUlksUUFBQSxHQUFHLE9BUWYifQ==