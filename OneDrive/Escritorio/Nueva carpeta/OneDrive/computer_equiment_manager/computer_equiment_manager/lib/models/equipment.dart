class Equipment {
  final String id;
  final String name;
  final String brand;
  final String serialNumber;
  bool isAvailable;

  Equipment({
    required this.id,
    required this.name,
    required this.brand,
    required this.serialNumber,
    this.isAvailable = true,
  });
}
