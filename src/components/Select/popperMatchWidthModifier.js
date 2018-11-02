export default {
  fn: data => {
    data.styles.width = data.offsets.popper.width =
      data.offsets.reference.width;
    // this +1 seems important, maybe due to borders?
    data.offsets.popper.left = data.offsets.reference.left;
    data.offsets.popper.right = data.offsets.reference.right;
    return data;
  },
  enabled: true,
  order: 840,
};
