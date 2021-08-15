/***============== ENUMs ==============**/
// They are special type in TS which allows to store a set of consts or keywords and associate them a numeric value
// 

enum ResourceType {
  BOOK, AUTHOR, FILM, DIRECTOR
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const firstDoc: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'narnia' },
};

console.log(firstDoc);
// firstDoc.resourceType returns numbers i.e. 1 in this case
