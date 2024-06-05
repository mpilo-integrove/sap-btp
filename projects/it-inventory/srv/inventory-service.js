const cds = require("@sap/cds");

module.exports = cds.serve('inventory-service').with(function () {
    this.after('READ', '*', (devices) => {
        for (let each of devices) {
            var deviceAge = calculateDeviceAgeYears(each)
            if (deviceAge >= 4) {
                each.isEligibleForReplacement = true
            } else {
                each.isEligibleForReplacement = false
            }
        }
    })
    this.on("error", (err, res) => {
        switch (err.message) {
            case "UNIQUE_CONSTRAINT_VIOLATION":
                err.message = "The entry already exists.";
                break;

            default:
                err.message =
                    "An error occurred. Please retry. Technical error message: " +
                    err.message;
                break;
        }
    });
})

function calculateDeviceAgeYears(asset) {
    var purchaseDate = new Date(asset.purchaseDate);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - purchaseDate.getFullYear();
    var monthDiff = currentDate.getMonth() - purchaseDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < purchaseDate.getDate())) {
        age--;
    }

    return age;
}