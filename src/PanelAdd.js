import React from 'react'

class PanelAdd extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            title: '',
            image: '',
            rating:1
        };

    }

    //otra forma de binding
    onChangeTitle = (e) => {
        this.setState({title: e.target.value});
    }

    onChangeImage = (e) => {
        this.setState({image: e.target.value});
    }

    onChangeRating = (e) => {
        const rating  = parseInt(e.target.value);
        this.setState({rating: rating});
    }

    onSubmit =(e)=>{
        e.preventDefault();
        const title = this.state.title;
        const rating = this.state.rating;
        const image = this.state.image;

        this.props.onadd({title:title,image:image,rating:rating});
        this.props.oncancel();
    }

    render() {
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <labe>Título Del Libro:</labe><br/>
                            <input onChange={this.onChangeTitle} type="name" name="name" className="input"/>
                        </p>

                        <p>
                            <labe>Nombre De La Imagen:</labe><br/>
                            <input onChange={this.onChangeImage} type="name" name="image" className="input"/>
                        </p>

                        <p>
                            <labe>Calificación:</labe><br/>
                            <select onChange={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar Libro"/>
                        <button onClick={this.props.oncancel} className="button btn-normal">Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PanelAdd;