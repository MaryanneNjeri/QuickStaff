import React from 'react';
import {Body, Card, Icon, Text} from "native-base";
import {StyleSheet} from "react-native";
import {Row, Grid} from 'react-native-easy-grid';

export default class GridComponent extends  React.Component{

    render() {
        return (
            <Grid>
                <Row style={{borderColor: '#BDC3C7',borderWidth: 0.3}}>
                    <Card style={styles.call} transparent>
                        <Body>
                            <Text note style={{fontSize: 10}}> <Icon type="FontAwesome" name="money" style={{fontSize: 10}}/>  pay rate</Text>
                            <Text>{" "}</Text>
                            <Text style={{fontSize: 12,fontWeight:'200'}}>{this.props.profile.pay_rate}</Text>
                        </Body>

                    </Card>
                    <Card style={styles.call} transparent>
                        <Body>
                            <Text note style={{fontSize: 10}}> <Icon type="Entypo" name="location-pin" style={{fontSize: 10}}/>  City</Text>
                            <Text>{""}</Text>
                            <Text style={{fontSize: 12,fontWeight:'200'}}>{this.props.profile.city}</Text>
                        </Body>

                    </Card>
                    <Card style={styles.call} transparent>
                        <Body>
                            <Text note style={{fontSize: 10}}> <Icon type="MaterialCommunityIcons" name= "map" style={{fontSize: 10}}/>  Province</Text>
                            <Text>{""}</Text>
                            <Text style={{fontSize: 12,fontWeight:'200'}}>{this.props.profile.province}</Text>
                        </Body>

                    </Card>
                    <Card style={styles.call} transparent>
                        <Body>
                            <Text note style={{fontSize: 10}}><Icon type="Ionicons" name= "md-time" style={{fontSize: 10}}/> Timezone</Text>
                            <Text>{""}</Text>
                            <Text style={{fontSize: 12,fontWeight:'200'}}>{this.props.profile.timezone}</Text>
                        </Body>

                    </Card>
                </Row>
            </Grid>
        );
    }
}
const styles = StyleSheet.create({
    call:{
        padding: 10,
        borderRightColor:'#BDC3C7',
        borderRightWidth:0.3
    }
});