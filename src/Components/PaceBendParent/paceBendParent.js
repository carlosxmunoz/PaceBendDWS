import React from "react";
import Maps from '../PaceBend/segment'





class PaceBendParent extends React.Component {




    componentWillMount() {
        // const state = this.props.location.state
        // console.log('state', state.id);
        //console.log('this.sssstate', this.state);
    }

    componentDidMount() {
        // const state = this.props.location.state
        // console.log('state', state);

        // const { id } = this.props.match.params    
        // this.props.location.pathname = '/segments?id=' + state.id
        // console.log(this.props.location.pathname);
        // this.setState({row: state});

    }

    render() {
        // const state = this.props.location.state;
        // if (state && this.state && !this.state.row) {        
        //     this.setState({row: state});
        // }
        return (

            <div className="parent-container">
                <Maps></Maps>
            </div>
        );

    }
}

export default PaceBendParent;
