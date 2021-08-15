"use strict";
/***============== ENUMs ==============**/
// They are special type in TS which allows to store a set of consts or keywords and associate them a numeric value
// 
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
const firstDoc = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'narnia' },
};
console.log(firstDoc);
// firstDoc.resourceType returns numbers i.e. 1 in this case
