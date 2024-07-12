import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardTitle,
  CardPrice,
  CardPriceSpan,
  CardDescription,
  CardContent,
  CardInner,
  List,
  ListItem,
  ListItemText,
  Button
} from './Card.styled';

export default function PricingCards () {
  return (
    <Container>
      <Grid>
        <Card>
          <CardHeader>
            <CardTitle id="tier-hobby">Basic</CardTitle>
            <CardPrice>
              $0 <CardPriceSpan>/mo</CardPriceSpan>
            </CardPrice>
            <CardDescription>All basic features included.</CardDescription>
          </CardHeader>
          <CardContent>
            <CardInner>
              <List>
                <ListItem>
                  <ListItemText>Lorem ipsum dolor sit amet.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Lorem ipsum dolor sit.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Lorem ipsum dolor sit amet.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Lorem ipsum dolor sit.</ListItemText>
                </ListItem>
              </List>
              <Button href="/" aria-describedby="tier-team">Get started</Button>
            </CardInner>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle id="tier-team">Medium</CardTitle>
            <CardPrice>
              $6 <CardPriceSpan>/mo</CardPriceSpan>
            </CardPrice>
            <CardDescription>For those who expect more.</CardDescription>
          </CardHeader>
          <CardContent>
            <CardInner>
              <List>
                <ListItem>
                  <ListItemText>Lorem ipsum dolor sit amet.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Lorem ipsum dolor sit.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Lorem, ipsum dolor.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
                </ListItem>
              </List>
              <Button href="/" aria-describedby="tier-team">Get started</Button>
            </CardInner>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle id="tier-team">Pro</CardTitle>
            <CardPrice>
              $10 <CardPriceSpan>/mo</CardPriceSpan>
            </CardPrice>
            <CardDescription>For those who expect more.</CardDescription>
          </CardHeader>
          <CardContent>
            <CardInner>
              <List>
                <ListItem>
                  <ListItemText>Lorem ipsum dolor sit amet.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Lorem ipsum dolor sit.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Lorem, ipsum dolor.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
                </ListItem>
              </List>
              <Button href="/" aria-describedby="tier-team">Get started</Button>
            </CardInner>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}


