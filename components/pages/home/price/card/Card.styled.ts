import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  max-width: 7xl;
  padding: 0 1.5rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const Grid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
  max-width: 5xl;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div`
  padding: 2rem;

  @media (min-width: 640px) {
    padding: 2.5rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: -0.025em;
  color: #2563eb;
`;

export const CardPrice = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: baseline;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.025em;
  color: #111827;
`;

export const CardPriceSpan = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: normal;
  color: #6b7280;
`;

export const CardDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.75rem;
  color: #4b5563;
`;

export const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.5rem;
`;

export const CardInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: #f9fafb;
  padding: 1.5rem;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-top: 1.5rem;

  &:first-child {
    margin-top: 0;
  }
`;

export const ListItemIcon = styled.div`
  flex-shrink: 0;
`;

export const ListItemText = styled.p`
  margin-left: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #4b5563;
`;

export const Button = styled.a`
  margin-top: 2rem;
  display: inline-block;
  width: 100%;
  border-radius: 0.75rem;
  background-color: #4F46CA;
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: #4F46CA;
    border: 1px solid #4F46CA;
  }
`;
