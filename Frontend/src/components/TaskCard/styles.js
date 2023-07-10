import styled from 'styled-components'

export const Container = styled.div`
  min-width: 240px;
  max-width: 240px;
  min-height: 240px;
  color: #fff;
  padding: 15px;
  margin: 10px;
  background-color: #0d1321;
  border-radius: 10px;
  border: solid 1px #424141;
`

export const TaskTitle = styled.h3`
  font-weight: bold;
  font-size: 19px;
  font-style: italic;
`

export const TaskDescription = styled.p`
  min-height: 164px;
  margin-top: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const TextArea = styled.textarea`
  max-width: 100%;
  min-height: 100px;

  margin-bottom: 10px;

  padding: 5px 10px;

  font-size: 15px;

  border: 1px solid #ffffff;
  border-radius: 5px;

  outline: none;

  border-color: rgb(48, 52, 54);
`
