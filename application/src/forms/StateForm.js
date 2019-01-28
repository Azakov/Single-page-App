import React, {Component} from "react"
import axios from "axios"


class StateForm extends Component {
    stateObject = {
        filling: 1,
        pending: 2,
        success: 3,
        failed: 4

    };

    localHost = {"serverURI": "http://localhost:8081"};

    constructor() {
        super();
        this.state = {status: this.stateObject.filling};
        this.submit = this.submit.bind(this);

    }

    render() {
        return (
            <div className="status-form">
                <div className={this.state.status === this.stateObject.filling ? null : "hidden"}>
                    {React.cloneElement(this.form, {onSubmit: this.submit})}
                </div>
                {this.service()}
            </div>
        )
    };


    submit(event) {
        this.setState({status: this.stateObject.pending});
        let json = {};
        let data = new FormData(event.target);
        console.log(data);
        console.log(event.target);
        console.log(this);
        for (const [key, value]  of data.entries()) {
            json[key] = value;
        }
        console.log(json);

        axios.post(this.localHost.serverURI + this.path, JSON.stringify(json)).then(
            response =>
                this.setState({
                    status: Math.floor(response.status / 100) === 2 ?
                        this.stateObject.success : this.stateObject.failed
                }),
            () => {
                this.setState({status: this.stateObject.failed});
            }
        );
        event.preventDefault();
    }


    service() {
        switch (this.state.status) {
            case this.stateObject.pending:
                return (
                    <div className="status">
                        Обработка запороса...
                    </div>
                );
            case this.stateObject.success:
                return (
                    <div className="status">
                        Успешно!
                        <br/>
                        <button onClick={() => this.setState({status: this.stateObject.filling})}>
                           Повтор
                        </button>
                    </div>
                );
            case this.stateObject.failed:
                return (
                    <div className="status">
                        Ошибка сервера!
                        <br/>
                        <button onClick={() => this.setState({status: this.stateObject.filling})}>
                           Повотор
                        </button>
                    </div>
                );
            default:
                return null;
        }
    }
}

export default StateForm