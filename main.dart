void main() {
  String validStr = '335 HELLO';
  print(double.tryParse(validStr) ?? 0);
}
