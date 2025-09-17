import 'package:get/get.dart';
import '../models/equipment.dart';

class EquipmentController extends GetxController {
  final RxList<Equipment> equipmentList = <Equipment>[].obs;

  void addEquipment(Equipment equipment) {
    equipmentList.add(equipment);
  }

  void removeEquipment(String id) {
    equipmentList.removeWhere((e) => e.id == id);
  }

  void toogleAvailability(String id) {
    final int index = equipmentList.indexWhere((e) => e.id == id);
    if (index != -1) {
      equipmentList[index].isAvailable = !equipmentList[index].isAvailable;
      equipmentList.refresh();
    }
  }
}
