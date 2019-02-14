import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, ScrollView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import _ from 'lodash';


class EmployeeList extends Component {
  componentDidMount(){
    this.props.employeesFetch();
  }

  render() {
    return(
      <ScrollView>
        <FlatList
        data={this.props.employees}
        renderItem={employee => <ListItem employee={employee.item} />}
        keyExtractor={employee => employee.uid}
        />
     </ScrollView>
      );
   };
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch }) (EmployeeList)

