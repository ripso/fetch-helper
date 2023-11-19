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
const get = (url, params = null, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const requestOptions = {
        method: 'GET',
        headers
    };
    if (params != null) {
        Object.keys(params)
            .forEach(key => {
            url.searchParams.append(key, params[key]);
        });
    }
    return yield fetch(url.href, requestOptions);
});
exports.get = get;
const post = (url, params, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const requestOptions = {
        method: 'POST',
        headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
        body: JSON.stringify(params)
    };
    return yield fetch(url.href, requestOptions);
});
exports.post = post;
const put = (url, params, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const requestOptions = {
        method: 'PUT',
        headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
        body: JSON.stringify(params)
    };
    return yield fetch(url.href, requestOptions);
});
exports.put = put;
const del = (url, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const requestOptions = {
        method: 'DELETE',
        headers
    };
    return yield fetch(url.href, requestOptions);
});
exports.del = del;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRU8sTUFBTSxHQUFHLEdBQUcsQ0FBTyxHQUFRLEVBQUUsU0FBOEIsSUFBSSxFQUFFLE9BQXNCLEVBQXFCLEVBQUU7SUFDbkgsTUFBTSxjQUFjLEdBQUc7UUFDckIsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPO0tBQ1IsQ0FBQTtJQUVELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDYixHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDM0MsQ0FBQyxDQUFDLENBQUE7S0FDTDtJQUVELE9BQU8sTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQTtBQUM5QyxDQUFDLENBQUEsQ0FBQTtBQWRZLFFBQUEsR0FBRyxPQWNmO0FBRU0sTUFBTSxJQUFJLEdBQUcsQ0FBTyxHQUFRLEVBQUUsTUFBVyxFQUFFLE9BQXNCLEVBQXFCLEVBQUU7SUFDN0YsTUFBTSxjQUFjLEdBQUc7UUFDckIsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLGtCQUNMLGNBQWMsRUFBRSxrQkFBa0IsSUFDL0IsT0FBTyxDQUNYO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0tBQzdCLENBQUE7SUFDRCxPQUFPLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUE7QUFDOUMsQ0FBQyxDQUFBLENBQUE7QUFWWSxRQUFBLElBQUksUUFVaEI7QUFFTSxNQUFNLEdBQUcsR0FBRyxDQUFPLEdBQVEsRUFBRSxNQUFXLEVBQUUsT0FBcUIsRUFBcUIsRUFBRTtJQUMzRixNQUFNLGNBQWMsR0FBRztRQUNyQixNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sa0JBQ0wsY0FBYyxFQUFFLGtCQUFrQixJQUMvQixPQUFPLENBQ1g7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7S0FDN0IsQ0FBQTtJQUNELE9BQU8sTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQTtBQUM5QyxDQUFDLENBQUEsQ0FBQTtBQVZZLFFBQUEsR0FBRyxPQVVmO0FBRU0sTUFBTSxHQUFHLEdBQUcsQ0FBTyxHQUFRLEVBQUUsT0FBcUIsRUFBcUIsRUFBRTtJQUM5RSxNQUFNLGNBQWMsR0FBRztRQUNyQixNQUFNLEVBQUUsUUFBUTtRQUNoQixPQUFPO0tBQ1IsQ0FBQTtJQUNELE9BQU8sTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQTtBQUM5QyxDQUFDLENBQUEsQ0FBQTtBQU5ZLFFBQUEsR0FBRyxPQU1mIn0=