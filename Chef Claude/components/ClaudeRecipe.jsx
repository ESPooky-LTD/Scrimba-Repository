import ReactMarkdown from "react-markdown"

export default function ClaudesRecipe(props) {
    return (
        <section>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}