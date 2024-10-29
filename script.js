const handleAnimalCategory = () => {
    const animalName = document.getElementById("animalName").value;

    let animalCategory;
    

    if(animalName === ''){
        alert("Please Enter Animal Name");
    }else{
        switch (animalName) {
            case "cat":
            case "dog":
                animalCategory = "Pet";
                break;

            case "lion":
            case "tiger":
                animalCategory = "Wild";
                break;

            default:
                animalCategory = "UnKnown category";
                break;
        }

        document.getElementById("result").textContent = animalCategory;
    }
    
};