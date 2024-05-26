import styled from '@emotion/styled';

const dark_green = '#4e7816';
const light_green = '#568515';
const lighter_green = '#77aa2f';
const pot_brown = '#b86112';
const light_brown = '#bf6a45';
const brown_shadow = '#c06b46';
const wall_shadow = '#c4dbbe';
const spike = '#ebf9d6';
const spike_faded = '#fdfefa';

export const Plants = styled.div`
    display: flex;
    flex-direction: row;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        content: "";
        position: absolute;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    & > .plant:nth-child(1) {
        @media only screen and (max-width: 48em) {
                display: none !important;
        }
    }

    .plant {
        position: relative;
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        //pots
        &::before {
            width: 6.25em;
            height: 3.75em;
            bottom: 12px;
            background-color: ${pot_brown};
            border-radius: 0 0 40px 40px;
            background-image: linear-gradient(
                    to bottom,
                    transparent 1em,
                    #a6580d 1em,
                    #a6580d 1.5em,
                    transparent 1.5em
            );
            box-shadow: .5em 0 ${wall_shadow}, 0 -0.1em ${brown_shadow};
            z-index: 100;
        }

        //shelf
        &::after {
            width: 100%;
            height: 0.75em;
            bottom: 0;
            background: ${light_brown};
            box-shadow: ${brown_shadow} 0 .25em 0px -0.4em, ${wall_shadow} 0 .3em 0 0,
                ${wall_shadow} 0 .1em 0 0;
        }
    }

    .leaves {
        position: absolute;
        background: ${light_green};
        box-shadow: .5em 0 ${wall_shadow};

        &.plant-1 {
            width: 2.4em;
            height: 8.8em;
            bottom: 60px;
            border-radius: 4em 4em 0 0;
            background-image: repeating-linear-gradient(
                    to right,
                        ${dark_green},
                        ${dark_green} 0.3em,
                    transparent 0.3em,
                    transparent 0.6em
            );

            &::before {
                width: 2em;
                height: 5.6em;
                top: 1.6em;
                left: -2.8em;
                background: inherit;
                border-radius: 4em 4em 0 4em;
                z-index: -1;
                background-image: inherit;
                box-shadow: inherit;
            }

            &::after {
                width: 1em;
                height: 2em;
                top: 5.2em;
                left: -1em;
                background: inherit;
                z-index: -1;
            }
        }

        &.plant-2 {
            width: 5.6em;
            height: 5.6em;
            bottom: 50px;
            border-radius: 50%;
            background-size: 1.2em 1.2em, 1.2em 1.2em, 5.6em 5.6em;
            background-image: radial-gradient(
                    1em 4.8em at center,
                        ${spike} 3%,
                    transparent 3%
            ),
            radial-gradient(4.8em 1em at center, ${spike} 3%, transparent 3%),
            radial-gradient(
                    5.6em 15em at center,
                    transparent 18%,
                        ${dark_green} 18%,
                        ${dark_green} 40%,
                    transparent 40%
            );
        }

        &.plant-3 {
            width: 4em;
            height: 5.6em;
            bottom: 60px;
            border-radius: 50% 50% 50% 50%;
            background-size: 0.8em 1em, 4em 4em;
            background-image: radial-gradient(
                        ${spike} 6%,
                        ${spike_faded} 6%,
                    transparent 16%
            ),
            linear-gradient(to right, ${dark_green} 2em, transparent 2em);

            &:before {
                width: 4em;
                height: 5.6em;
                background: inherit;
                border-radius: inherit;
                transform: translate(80%, -25%) rotate(45deg) scale(0.75);
                box-shadow: inherit;
            }

            &:after {
                width: 4em;
                height: 5.6em;
                background: inherit;
                border-radius: inherit;
                transform: translate(90%, -75%) rotate(16deg) scale(0.45);
                z-index: -1;
                box-shadow: inherit;
            }
        }

        &.plant-4 {
            width: 3.6em;
            height: 8.4em;
            bottom: 70px;
            border-radius: 50% 50% 0 0;
            background-color: ${light_green};
            background-image: repeating-linear-gradient(
                    to right,
                    transparent,
                    transparent 0.8em,
                        ${dark_green} 0.8em,
                        ${dark_green} 1.1em,
                    transparent 1.1em
            );

            &:after {
                width: 2.8em;
                height: 4.8em;
                bottom: 0;
                left: -0.8em;
                border-radius: 48% 48% 0 0;
                background: ${lighter_green};
                box-shadow: 0.4em 0 1.2em ${dark_green};
                background-image: inherit;
            }
        }
    }
`;
