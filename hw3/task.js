var localStorageModule = (function () {
    var arr = [];
    return {
        get: function (key) {
            var value = localStorage[key] || false;
            if (value) {
                if (typeof value === 'string') {
                    return JSON.parse(value);
                }
                else {
                    return value;
                }
            }
            return false;
        },
        getAll: function () {
            for (var key in localStorage) {
                var value = localStorage.getItem(key);
                arr.push({key: key, value: value});
            }
            return arr;
        },
        set: function (key, value) {
            if (typeof value !== 'string') {
                var value = JSON.stringify(value);
            }
            localStorage[key] = value;
        },
        remove: function (key) {
            delete localStorage[key];
            return key;
        },
        clear: function () {
            return localStorage.clear();
        },
        add: function (array) {
            for (var obj of array) {
                localStorage.setItem(obj.key, obj.value);
            }
        }
    }
}());

