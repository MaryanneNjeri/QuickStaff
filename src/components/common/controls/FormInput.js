import React from 'react';
import {
  Icon, Input, Item, Label,
} from 'native-base';

export default ({ floatingLabel, regular, label }) => (
  <Item floatingLabel={floatingLabel} regular={regular}>
    <Label style={{ color: '#303B43', fontSize: 10 }}>{label}</Label>
    <Input
      value={profile.profile_image}
      onChangeText={(e) => {
        const prof = profile;
        profile.profile_image = e;
        this.setState({ profile: prof });
      }}
    />
    <Icon
      type="Feather"
      name="upload"
      style={{ fontSize: 15, color: '#303B43' }}
      onPress={this.pickImage}
    />
  </Item>
);
