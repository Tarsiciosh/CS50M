import React from 'react'
import {StyleSheet, Text} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  text: {fontSize: 72},
})

//export const num = 50

class Count extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
  }

  render() {
    return (
      <Text style={styles.text}>
        {this.props.count}
      </Text>
    )
  }
}


// stateless funtional component SFC
const Count = props => (
  <Text style={styles.text}> {props.count} </Text>
)
Count.propTypes = {
  count: PropTypes.number.isRequired
}


export default Count
