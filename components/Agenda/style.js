import styled from "styled-components";
// import bg from "../../assets/bg.png"

const Wrapper = styled.div`
    /* .inner {
        max-width: 1200px;
        width: 80%;
        margin: auto;
    } */
    .presentation {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        color: #f472b6;
    }

    .timer-container {
        flex: 1;
        display: flex;
        justify-content: center;

        .timer {
            display: flex;
            font-size: 4rem;
            gap: 16px;
            justify-content: space-between;
            max-width: 300px;
            width: 100%;
        }
    }

    .content-container {
        display: flex;
        align-items: center;
        gap: 10px;
        .arrow {
            height: 50px;
            align-content: center;
            img {
                width: 30px;
                max-width: unset;
                &:hover {
                    cursor: pointer;
                    transform: scale(1.2);
                }
            }
        }
    }

    .content {
        width: 600px;
        display: flex;
        align-items: center;
        overflow: scroll;
        scrollbar-width: none;
        transition: 0.4s;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;
    }

    .data {
        width: 100%;
        min-width: 600px;
        border: none;
        align-content: center;
        scroll-snap-align: start;
        flex-shrink: 0;
        > img {
            width: 100%;
        }
        :last-child {
            margin-right: 0px;
        }
    }

    @media screen and (max-width: 600px) {
        height: 230px;
        .presentation {
            transform: scale(0.5) translateY(-200px);
        }
    }
`;
export default Wrapper;
