"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    Object.defineProperty(Sejour.prototype, "name", {
        get: function () {
            return this.nom;
        },
        set: function (newName) {
            this.nom = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "price", {
        get: function () {
            return this.prix;
        },
        set: function (newPrice) {
            this.price = newPrice;
        },
        enumerable: false,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        var s1 = new Sejour("Dijon", 132);
        var s2 = new Sejour("Milan", 522);
        var s3 = new Sejour("Berlin", 178);
        var s4 = new Sejour("Los Angeles", 15);
        var s5 = new Sejour("Ouessant", 1256);
        this.sejourTab = [s1, s2, s3, s4, s5];
    }
    SejourService.prototype.sejourParNom = function (nomSejour) {
        for (var _i = 0, _a = this.sejourTab; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.name === nomSejour) {
                return sejour;
            }
        }
    };
    return SejourService;
}());
var sejourService = new SejourService();
var sejourTrouve = sejourService.sejourParNom("Dijon");
if (sejourTrouve) {
    console.log("Sejour trouv\u00E9 => ", sejourTrouve);
}
else {
    console.log("Le sejour demand\u00E9 est introuvable ..");
}
