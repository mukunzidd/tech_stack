import React, { Component } from 'react';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import * as actions from '../actions'

class ListItem extends Component {

    // Render the description
    renderDescription() {
        const { library, selectedLibId } = this.props;
        // console.log(library.id);
        if (library.id === selectedLibId) {
            return (
                <CardSection>
                    <Text>{library.description} and the Id is: {selectedLibId}</Text>
                </CardSection>
            );
            console.log(selectedLibId);
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title, description } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 19,
        padding: 15,
    }
}

const mapStateToProps = state => {
    return { selectedLibId: state.selectedLibId };
};

export default connect(mapStateToProps, actions)(ListItem);