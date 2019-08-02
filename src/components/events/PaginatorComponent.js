import React from 'react';
import {
  Container, Content, Icon, Text, View,
} from 'native-base';
import Button from '../common/buttons/Button';
import DisabledButton from './DisabledButton';

// eslint-disable-next-line react/prefer-stateless-function
export default class PaginatorComponent extends React.Component {
  render() {
    const {
      loadMore, offset, meta, back,
    } = this.props;
    // console.log(meta)
    return (

      <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Content>
          <View style={{
            justifyContent: 'center', bottom: 0, alignItems: 'center', marginTop: 20,
          }}
          >
            {meta.pagination !== undefined ? (
              <View>

                <View style={{
                  alignSelf: 'center', justifyContent: 'center', marginTop: 15, flexDirection: 'row',
                }}
                >

                  { offset !== 1

                    ? (
                      <View style={{ paddingRight: 30 }}>
                        <Icon
                          type="AntDesign"
                          name="arrowleft"
                          onPress={back}
                          style={{ color: '#1883CB', fontSize: 20 }}
                        />
                      </View>
                    )

                    : null}
                  <Text note style={{ color: '#1883CB', fontSize: 13, fontWeight: 'bold' }}>
                    {meta.pagination.current_page}
                    {' '}
                          of
                    {' '}
                    {meta.pagination.total}

                  </Text>

                </View>
                {offset !== meta.pagination.total && meta.pagination.count !== meta.pagination.total

                  ? <Button bottom onPress={loadMore}>Load More</Button>
                  : <DisabledButton />}

              </View>


            )
              : null}

          </View>
        </Content>
      </Container>
    );
  }
}
