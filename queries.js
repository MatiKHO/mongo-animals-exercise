// 1
db.animals.find({"type": "Birds"});
// 2
db.animals.find({"found_in_countries": "Australia"});
// 3
db.animals.find({"conservation_status": "Critically Endangered"});
// 4
db.animals.find({$and: [{ "diet": "Herbivore" }, { "habitat": "Forest"}]});
// 5
db.animals.find({ "physical_characteristics.weight": { "$gt": 400000 } });
// 6
db.animals.find({"physical_characteristics.height": {"lt": 100}});
// 7
db.animals.find({"found_in_countries": "China"});
// 8
db.animals.find({$and: [{"diet": "Onmivore"}, {"conservation_status": "Endangered"}]});
// 9
db.animals.find({"common_name": "Lion"});
// 10
db.animals.find({"physical.characteristics.length": {"$gt": 200}});
// 11 
db.animals.find({"found_in_countries": {"$regex": "Africa"}});
// 12
db.animals.find({"scientific_name": {"$regex": "^A"}});
// 13
db.animals.find({$and: [{"diet": "Carnivore"}, {"physical_characteristics.weight": { "$lt": 50000 }}]});
// 14
db.animals.find({$and: [{"conservation_status": "Vulnerable"}, {"habitat": "Desert"}]});
// 15
db.animals.find({"common_name": {"$regex": "Tiger"}});
