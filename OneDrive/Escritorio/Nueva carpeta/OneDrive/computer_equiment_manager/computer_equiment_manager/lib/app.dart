import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'screens/equipment_screen.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Computer Equipment Manager',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const EquipmentScreen(),
    );
  }
}
