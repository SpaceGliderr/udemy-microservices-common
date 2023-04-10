export enum OrderStatus {
  // Order created but ticket has not been reserved
  Created = "created",
  // Ticket has already been reserved by another user or when user cancelled the order
  // If order expires before payment
  Cancelled = "cancelled",
  // User successfully reserved the ticket
  AwaitingPayment = "awaiting:payment",
  // User has successfully provided payment
  Complete = "complete",
}
