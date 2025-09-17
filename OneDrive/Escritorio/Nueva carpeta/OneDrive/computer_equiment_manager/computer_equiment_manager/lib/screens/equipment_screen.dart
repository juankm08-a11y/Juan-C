import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/equipment_controller.dart';
import '../models/equipment.dart';

class EquipmentScreen extends StatelessWidget {
  const EquipmentScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final EquipmentController equipmentController = Get.put(
      EquipmentController(),
    );

    return Scaffold(
      appBar: AppBar(title: const Text('Computer Equipment Manager')),
      body: Obx(() {
        return ListView.builder(
          itemCount: equipmentController.equipmentList.length,
          itemBuilder: (context, index) {
            final Equipment equipment =
                equipmentController.equipmentList[index];
            return ListTile(
              title: Text(
                "${equipment.name} (${equipment.brand})",
                style: TextStyle(
                  color: equipment.isAvailable ? Colors.green : Colors.red,
                  fontWeight: FontWeight.bold,
                ),
              ),
              subtitle: Text("Serial: ${equipment.serialNumber}"),
              trailing: IconButton(
                icon: const Icon(Icons.delete),
                onPressed: () =>
                    equipmentController.removeEquipment(equipment.id),
              ),
              onTap: () => equipmentController.toogleAvailability(equipment.id),
            );
          },
        );
      }),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          final String id = DateTime.now().toString();
          equipmentController.addEquipment(
            Equipment(
              id: id,
              name: "Laptop",
              brand: "Lenovo",
              serialNumber: "SN$id",
            ),
          );
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
