import React from 'react';
import styles from './Type-styles.css';

class Type extends React.Component {
    constructor(props) {
        super(props);
    }

    handleTypeIsChosen = () => {
        let activeType = this.props.typeName;
        this.props.handleTypeIsChosen(activeType)
    }

    render() {
        const { 
            typeName, 
            isChosen, 
        } =this.props;
        
        let classNames = isChosen === typeName ? `${styles.type} ${styles.type_active}` : styles.type;

        return (
            <div 
                onClick={this.handleTypeIsChosen}
                className={classNames}
            >
                { typeName }
            </div>
        )
    }
}

export default Type;