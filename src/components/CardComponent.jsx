import "./CardComponent.css"

const CardComponent = ({todo})=>{

    const formatDate = (date) =>{
        return new Date(date).toLocaleDateString('en-UK', { year: 'numeric', month: 'long', day: 'numeric' })
    }

    return (
        <div className="col-4">
            <div className="p-card u-no-padding card-styles">
                <div className="p-card__inner">
                    <h5>Cloud and Server</h5>
                    <hr className="dotted-line" />
                    <a href={todo.link}>
                        <img className="p-card__image" src={todo.featured_media} />
                    </a>
                    <div className="card-title">
                        <a className="title" href={todo.link}>{todo.title.rendered}</a>
                    </div>
                    <div className="author-date">
                        <i>
                            By <a href={todo._embedded.author[0].link}>{todo._embedded.author[0].name}</a> on {formatDate(todo.date)}
                        </i>
                    </div>
                </div>
                <div className="p-card__inner">
                    <hr className="dotted-line u-no-margin--bottom"/>
                    <p>Article</p>
                </div>
            </div>
        </div>
    )
}

export default CardComponent