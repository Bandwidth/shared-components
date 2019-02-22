export default {
  fn: data => {
    data.styles.width = data.offsets.popper.width = Math.round(
      data.offsets.reference.width,
    );
    return data;
  },
  enabled: true,
  order: 840,
};
