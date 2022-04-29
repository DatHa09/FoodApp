import {colors} from '../../../../assets/data/foodAppData';
import {StyleSheet, Platform} from 'react-native';
export const styles = StyleSheet.create({
  container_appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: Platform.OS == 'ios' ? 64 : 5,
    // height: Platform.OS == 'ios' ? 100 : 56,
    marginTop: 5,
  },
  appBar_text: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 99,
    backgroundColor: colors.secondary_2,
  },
  appBar_text__content: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textColor,
  },
});
