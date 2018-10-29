export default {
  fn: data => {
    data.styles.width = data.offsets.popper.width = Math.round(
      data.offsets.reference.width,
    );
    data.offsets.popper.left = data.offsets.reference.left;
    data.offsets.popper.right = data.offsets.reference.right;
    return data;
  },
  enabled: true,
  order: 840,
};
