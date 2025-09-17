class Pet {
  final int? id;
  final String name;
  final String type;
  final int age;

  Pet({this.id, required this.name, required this.type, required this.age});

  Map<String, dynamic> toMap() {
    return {'id': id, 'name': name, 'age': age};
  }

  factory Pet.fromMap(Map<String, dynamic> map) {
    return Pet(
      id: map['id'],
      name: map['name'],
      type: map['type'],
      age: map['age'],
    );
  }
}
