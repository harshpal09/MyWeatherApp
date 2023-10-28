import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const Input = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: #007BFF;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
`;
export const RefreshButton = styled.TouchableOpacity`
  background-color: #74c221;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
`;

export const RefreshButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight:bold;
`;

export const SearchButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight:bold;
`;

// You can define more styles as needed
