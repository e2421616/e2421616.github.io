const foods = [
    { name: "ラーメン", id: "ramen", link: "https://www.ichiran.com/" },
    { name: "牛タン", id: "gyutan", link: "https://www.negishi.co.jp/" },
    { name: "パスタ", id: "pasta", link: "https://www.saizeriya.co.jp/" },
    { name: "カレー", id: "curry", link: "https://www.ichibanya.co.jp/index.html" },
    { name: "天ぷら", id: "tempura", link: "https://restaurant-yamaya.com/brand/tenpura/" }
  ];
  
 
  document.getElementById('randomBtn').addEventListener('click', function() {

    foods.forEach(food => {
      document.getElementById(food.id).style.display = 'none';
    });
  
  
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
  

    document.getElementById('foodName').textContent = randomFood.name;
  
  
    const foodImage = document.getElementById(randomFood.id);
    foodImage.style.display = 'block'; 
  
  
    const restaurantLink = document.getElementById('restaurantLink');
    restaurantLink.style.display = 'block'; 
    const restaurantUrl = document.getElementById('restaurantUrl');
    restaurantUrl.href = randomFood.link;
    restaurantUrl.textContent = randomFood.name + "のおすすめのお店はこちら"; 
  });
  