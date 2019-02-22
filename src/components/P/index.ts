import P from './P';
import SkeletonParagraph from './SkeletonParagraph';
import dotNotation from 'extensions/dotNotation';

export default dotNotation(P, { Skeleton: SkeletonParagraph });
