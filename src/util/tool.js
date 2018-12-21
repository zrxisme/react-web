export default class Events {
    constructor() {
        this.events = []
    }
    getFoodCount(id) {
        let foodCounts = localStorage.getItem('foodCounts')
        if (foodCounts && foodCounts[id]) {
            foodCounts = JSON.parse(foodCounts)
            return foodCounts[id]
        } else {
            return 0
        }
    }
    addFoodCount(id) {
        let foodCounts = localStorage.getItem('foodCounts')
        if (foodCounts) {
            foodCounts = JSON.parse(foodCounts)
            if (foodCounts[id]) {
                foodCounts[id] = foodCounts[id] + 1
                localStorage.setItem('foodCounts', JSON.stringify(foodCounts))
            } else {
                foodCounts[id] = 1
                localStorage.setItem('foodCounts', JSON.stringify(foodCounts))
            }

        } else {
            localStorage.setItem('foodCounts', JSON.stringify({
                [id]: 1
            }))
        }
    }
    delFoodCount(id) {
        let foodCounts = localStorage.getItem('foodCounts')
        if (foodCounts) {
            foodCounts = JSON.parse(foodCounts)
            if (foodCounts[id]) {
                if (foodCounts[id] > 0) {
                    foodCounts[id] = foodCounts[id] - 1
                    localStorage.setItem('foodCounts', JSON.stringify(foodCounts))
                }
            } else {
                foodCounts[id] = 0
                localStorage.setItem('foodCounts', JSON.stringify(foodCounts))
            }

        } else {
            localStorage.setItem('foodCounts', JSON.stringify({
                [id]: 0
            }))
        }
    }
}