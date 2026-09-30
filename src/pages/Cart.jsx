// import { Box, Button, Card, CardContent, Container, Divider, IconButton, Stack, Typography } from "@mui/material";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import { Link } from "react-router-dom";

// export default function Cart({ cart, updateQty }) {
//   const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
//   return (
//     <Container maxWidth="md" sx={{ py: 6 }}>
//       <Typography variant="h3">Cart</Typography>
//       <Card sx={{ mt: 3 }}><CardContent sx={{ p: 4 }}>
//         {cart.length === 0 ? <><Typography color="text.secondary">Your demo cart is empty.</Typography><Button component={Link} to="/search?type=medicine" sx={{ mt: 2 }} variant="contained">Browse medicines</Button></> :
//           <>
//             {cart.map(item => <Stack key={item.id} direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 2 }}><div><Typography fontWeight={800}>{item.name}</Typography><Typography color="text.secondary">Rs. {item.price} × {item.qty}</Typography></Box><Stack direction="row" alignItems="center"><Button onClick={() => updateQty(item.id, item.qty - 1)}>-</Button><Typography>{item.qty}</Typography><Button onClick={() => updateQty(item.id, item.qty + 1)}>+</Button><IconButton onClick={() => updateQty(item.id, 0)}><DeleteOutlineIcon /></IconButton></Stack></Stack>)}
//             <Divider /><Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}><Typography fontWeight={800}>Subtotal</Typography><Typography variant="h6">Rs. {subtotal}</Typography></Stack>
//             <Button component={Link} to="/checkout" variant="contained" size="large" fullWidth sx={{ mt: 3 }}>Continue to checkout</Button>
//           </>}
//       </CardContent></Card>
//     </Container>
//   );
// }


import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

export default function Cart({ cart, updateQty }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3">Cart</Typography>

      <Card sx={{ mt: 3 }}>
        <CardContent sx={{ p: 4 }}>
          {cart.length === 0 ? (
            <>
              <Typography color="text.secondary">
                Your demo cart is empty.
              </Typography>

              <Button
                component={Link}
                to="/search?type=medicine"
                sx={{ mt: 2 }}
                variant="contained"
              >
                Browse medicines
              </Button>
            </>
          ) : (
            <>
              {cart.map((item) => (
                <Stack
                  key={item.id}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ py: 2 }}
                >
                  <div>
                    <Typography fontWeight={800}>
                      {item.name}
                    </Typography>

                    <Typography color="text.secondary">
                      Rs. {item.price} × {item.qty}
                    </Typography>
                  </div>

                  <Stack direction="row" alignItems="center">
                    <Button
                      onClick={() =>
                        updateQty(item.id, item.qty - 1)
                      }
                    >
                      -
                    </Button>

                    <Typography>{item.qty}</Typography>

                    <Button
                      onClick={() =>
                        updateQty(item.id, item.qty + 1)
                      }
                    >
                      +
                    </Button>

                    <IconButton
                      onClick={() => updateQty(item.id, 0)}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              ))}

              <Divider />

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ mt: 3 }}
              >
                <Typography fontWeight={800}>
                  Subtotal
                </Typography>

                <Typography variant="h6">
                  Rs. {subtotal}
                </Typography>
              </Stack>

              <Button
                component={Link}
                to="/checkout"
                variant="contained"
                size="large"
                fullWidth
                sx={{ mt: 3 }}
              >
                Continue to checkout
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

