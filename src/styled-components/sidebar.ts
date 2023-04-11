import styled from "@emotion/styled";

export const SideBarMainFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 92vh;
  position: sticky;
  top: 60px; /* Adjusted top value to account for header height */
  color: white;
  z-index: 0;
  background-color: #2C3E50;
  overflow-y: auto;
  align-item:stretch
`;

export const SideBarMainFlexBoxIem = styled.div`
  position: sticky;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  border-bottom: 1px solid #ccc; /* Add border at the bottom of each item */
  align-items: center; /* Center the content vertically */
  justify-content: center; /* Center the content horizontally */
  text-align: center; /* Center the text */
  font-weight: bold; /* Make the text bold */
  justify-text:center
  margin-top:50px
`;

// max-width: 100%;
// height: calc(100% - 20px);
// position: sticky;
// overflow-y: auto;
// top: 60px;
// padding: 20px;