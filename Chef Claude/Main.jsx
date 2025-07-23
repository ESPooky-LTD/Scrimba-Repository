import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudesRecipe from "./components/ClaudeRecipe"
import { getRecipeFromChefClaude } from "./ai"



export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        []
    )
    const [recipe, setRecipe] = React.useState(false)

    async function getRecipe() {
        const claudesRecipe = await getRecipeFromChefClaude(ingredients)
        setRecipe(claudesRecipe)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudesRecipe recipe={recipe} />}
        </main>
    )
}