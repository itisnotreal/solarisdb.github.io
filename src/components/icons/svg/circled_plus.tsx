import type { FC } from 'react';

import type { SvgIconProps } from '../base';
import { SvgBaseIcon } from '../base';

export const CircledPlusIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgBaseIcon {...props}>
      <path
        d="M11.320 1.041 C 9.798 1.132,8.381 1.519,7.000 2.222 C 4.958 3.260,3.260 4.958,2.222 7.000 C 1.405 8.605,1.033 10.171,1.033 12.000 C 1.033 13.497,1.269 14.748,1.808 16.100 C 2.773 18.522,4.664 20.590,7.000 21.778 C 8.170 22.373,9.360 22.739,10.664 22.902 C 11.351 22.989,12.649 22.989,13.336 22.902 C 16.345 22.524,19.033 20.958,20.819 18.540 C 21.583 17.507,22.118 16.454,22.496 15.240 C 23.035 13.509,23.123 11.482,22.738 9.684 C 22.053 6.483,19.918 3.706,17.000 2.222 C 15.234 1.324,13.306 0.923,11.320 1.041 M13.440 3.097 C 14.895 3.347,16.251 3.929,17.440 4.815 C 17.928 5.179,18.821 6.072,19.185 6.560 C 20.080 7.761,20.659 9.118,20.908 10.596 C 21.010 11.198,21.010 12.802,20.908 13.404 C 20.659 14.882,20.080 16.239,19.185 17.440 C 18.821 17.928,17.928 18.821,17.440 19.185 C 16.239 20.080,14.882 20.659,13.404 20.908 C 12.802 21.010,11.198 21.010,10.596 20.908 C 9.118 20.659,7.761 20.080,6.560 19.185 C 6.071 18.820,5.178 17.927,4.816 17.440 C 3.911 16.221,3.342 14.890,3.092 13.404 C 2.990 12.802,2.990 11.198,3.092 10.596 C 3.342 9.112,3.909 7.783,4.815 6.560 C 5.177 6.072,6.072 5.177,6.560 4.815 C 7.937 3.795,9.361 3.236,11.120 3.025 C 11.458 2.984,13.074 3.035,13.440 3.097 M11.813 7.043 C 11.594 7.085,11.448 7.164,11.292 7.327 C 11.021 7.609,11.021 7.607,11.008 9.388 L 10.996 10.995 9.388 11.008 C 7.855 11.019,7.772 11.024,7.600 11.104 C 6.998 11.383,6.834 12.163,7.275 12.652 C 7.355 12.740,7.501 12.850,7.600 12.896 C 7.772 12.976,7.855 12.981,9.388 12.992 L 10.996 13.005 11.008 14.612 C 11.021 16.393,11.021 16.389,11.292 16.675 C 11.765 17.175,12.621 17.019,12.908 16.380 C 12.973 16.236,12.981 16.058,12.992 14.612 L 13.005 13.005 14.612 12.992 C 16.392 12.979,16.389 12.979,16.675 12.708 C 17.175 12.235,17.019 11.379,16.380 11.092 C 16.236 11.027,16.058 11.019,14.612 11.008 L 13.005 10.995 12.992 9.388 C 12.981 7.855,12.976 7.772,12.896 7.600 C 12.706 7.190,12.258 6.960,11.813 7.043 "
        fillRule="evenodd"
      />
    </SvgBaseIcon>
  );
};