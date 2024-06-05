namespace inventorymanagement;

using {
    managed,
    cuid,
    User
} from '@sap/cds/common';

aspect Assets : cuid, managed {
    category                 : String;
    descr                    : String;
    isEligibleForReplacement : Boolean default false;
    purchaseDate             : Date;
    purchasePrice            : Decimal;
    quantity                 : Integer;
}

entity Notebooks : Assets {
    screenSize     : Decimal;
    hasTouchScreen : Boolean;
}

entity Phones : Assets {
    phoneNumber      : String;
    lastUsedDateTime : DateTime;
}

entity Tablets : Assets {
    screenResolution : String;
    batteryCapacity  : Decimal;
}
