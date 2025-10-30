import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }

    .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right {
        top: 10px;
    }

    cursor: grab;

    padding-left: 40px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #9758a6;
    padding-top: 20px;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;

    &::after {
        content: '';
        position: absolute;
        width: 56px;
        height: 4px;
        background-color: #9758a6;
        bottom: 0;
        left: calc(50% - 28px);
    }
`;

export const ContainerItens = styled.div`
    background: url('${(props) => props.imageUrl}'), no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 200px;

    p {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22.5px;
        font-weight: bold;
        margin-top: 50px;
    }
`;
