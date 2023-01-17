# Healthiest Foods in different Fast Food Restaurants
> All this information was based upon the amount of calories in a main course meal at a Fast Food Restaurant. Some restaurants like Subway and Chipotle are not listed here because of their option to create your own meal. This results in one main course meal having a different amount of calories.

## Wendy's

| Healthiest | Less Healthy |
| --- | --- |
| Jr. Hamburger <img src="/images/wendys_yes_heal.png" width="200px" />| Pretzel Bacon Pub Triple <img src="/images/wendys_no_healthy.png" width="200px" />|
| 250 calories, 11g Total fat, 25g carbs, and 5g sugars | 1530 calories, 107g Total fat, 53g carbs, and 6g Total sugars |

## Mcdonalds

| Healthiest | Less Healthy |
| --- | --- |
| The classic McDonald’s Burger | Double Quarter Pounder with Cheese |
| 250 calories, 9g Total fat, 31g carbs, and 6g Total sugars | 740 calories, 42g Total fat, 43g carbs, and 10g Total sugars|

## Carl's Jr

| Healthiest | Less Healthy |
| --- | --- |
| Hamburger kid’s meal | Super Star with Cheese |
| 200 calories, 9g Total fat, 1g carbs, and 7g Total sugars| 920 calories, 56g Total fat, 59g carbs, and 13g Total sugars|

## In-N-Out

| Healthiest | Less Healthy |
| --- | --- |
| Hamburger | Double-Double |
| 390 calories, 19g Total fat, 39g carbs, and 10g Total sugars | 670 calories, 41g Total fat, 39g carbs, and 10g Total sugars|

## Taco Bell

| Healthiest | Less Healthy |
| --- | --- |
| Crunchy Taco | Double Steak Grilled Cheese Burrito |
| 170 calories, 10g Total fat, 13g carbs, and <1g Total sugars | 920 calories, 44g Total fat, 91g carbs, and 7g Total sugars|

## Jack in the box

| Healthiest | Less Healthy |
| --- | --- |
| Jr. Jumbo Jack | Bacon Ultimate Cheeseburger |
| 400 calories | 930 calories |

## Burger King

| Healthiest | Less Healthy |
| --- | --- |
| Hamburger | Double Whopper with Cheese |
| 259 calories, 10g Total fat, 29g carbs, and 7g Total sugars| 1010 calories, 65g Total fat, 56g carbs, and 14g Total sugars|

## Chick fil A

| Healthiest | Less Healthy |
| --- | --- |
| Grilled Nuggets | Spicy Deluxe Sandwich |
| 80 calories, 2g Total fat, 1g carbs, and 0g Total sugars| 660 calories, 45g Total fat, 32g carbs, and 5g Total sugars|

# Food Data Table

## Insert New Food Item

<table>
    <tr>
        <th><label for="Food">Food</label></th>
        <th><label for="Restaurant">Restaurant</label></th>
        <th><label for="Protein">Protein</label></th>
        <th><label for="Fat">Fat</label></th>
        <th><label for="Sugar">Sugar</label></th>
        <th><label for="Carbs">Carbs</label></th>
    </tr>
    <tr>
        <td><input type="text" size="20" name="Food name" id="Food" placeholder="Food" required></td>
        <td><input type="text" size="10" name="Restaurant" id="Restaurant" placeholder="Restaurant" required></td>
        <td><input type="text" size="5" name="Protein" id="Protein" placeholder="Protein" required></td>
        <td><input type="text" size="5" name="Fat" id="Fat" placeholder="Fat" required></td>
        <td><input type="text" size="5" name="Sugar" id="Sugar" placeholder="Sugar" required></td>
        <td><input type="text" size="5" name="Carbs" id="Carbs" placeholder="Carbs" required></td>
        <td ><button onclick="create_User()">Create</button></td>
    </tr>
</table>

## Food Items
Sort by <button onclick="cal_Protein()">Protein</button> <button onclick="cal_Fat()">Fat</button> <button onclick="cal_Sugar()">Sugar</button> <button onclick="cal_Carbs()">Carbs</button>
<table>
  <thead>
  <tr>
    <th>Food</th>
    <th>Restaurant</th>
    <th>Protein</th>
    <th>Fat</th>
    <th>Sugar</th>
    <th>Carbs</th>
  </tr>
  </thead>
  <tbody id="table">
    <!-- javascript generated data --> 
    <tr>
      <th>SOMETHING</th>
      <th>Somewhere</th>
      <th>8</th>
      <th>220</th>
      <th>700</th>
      <th>1100</th>
      <td ><button size="5" onclick="Update_food()">Update</button></td>
      <td ><button size="5" onclick="Delete_food()">Delete</button></td>
    </tr>
    <tr>
      <th>NOTHING</th>
      <th>Nowhere</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <td ><button onclick="Update_food()">Update</button></td>
      <td ><button onclick="Delete_food()">Delete</button></td>
    </tr>
  </tbody>
</table>
