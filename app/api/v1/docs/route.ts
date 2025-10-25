import { NextResponse } from 'next/server'

export async function GET() {
  const documentation = {
    openapi: '3.0.0',
    info: {
      title: 'MyPrintSource AI API',
      version: '1.0.0',
      description: 'AI-powered printing platform API. Automated file optimization, instant quotes, intelligent material recommendations, and real-time production tracking.',
      contact: {
        name: 'MyPrintSource AI Support',
        email: 'api@myprintsource.com',
      },
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production'
          ? 'https://myprintsource.com/api/v1'
          : 'http://localhost:3000/api/v1',
        description: process.env.NODE_ENV === 'production' ? 'Production' : 'Development',
      },
    ],
    security: [
      { ApiKeyAuth: [] },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'X-API-Key',
          description: 'API key for authentication',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            email: { type: 'string', format: 'email' },
            name: { type: 'string' },
            username: { type: 'string' },
            avatar_url: { type: 'string', nullable: true },
            timezone: { type: 'string' },
            booking_duration: { type: 'integer' },
            buffer_time: { type: 'integer' },
            created_at: { type: 'string', format: 'date-time' },
          },
        },
        Booking: {
          type: 'object',
          required: ['user_id', 'guest_name', 'guest_email', 'start_time', 'end_time'],
          properties: {
            id: { type: 'string', format: 'uuid' },
            user_id: { type: 'string', format: 'uuid' },
            guest_name: { type: 'string' },
            guest_email: { type: 'string', format: 'email' },
            start_time: { type: 'string', format: 'date-time' },
            end_time: { type: 'string', format: 'date-time' },
            status: { type: 'string', enum: ['confirmed', 'cancelled', 'pending'] },
            notes: { type: 'string', nullable: true },
            meeting_link: { type: 'string', nullable: true },
            created_at: { type: 'string', format: 'date-time' },
          },
        },
        Availability: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            user_id: { type: 'string', format: 'uuid' },
            day_of_week: { type: 'integer', minimum: 0, maximum: 6 },
            start_time: { type: 'string', pattern: '^\\d{2}:\\d{2}$' },
            end_time: { type: 'string', pattern: '^\\d{2}:\\d{2}$' },
            is_active: { type: 'boolean' },
          },
        },
        TimeSlot: {
          type: 'object',
          properties: {
            start_time: { type: 'string', format: 'date-time' },
            end_time: { type: 'string', format: 'date-time' },
            time: { type: 'string' },
            display_time: { type: 'string' },
            available: { type: 'boolean' },
            duration_minutes: { type: 'integer' },
          },
        },
        ApiResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: { type: 'object' },
            message: { type: 'string' },
            meta: { type: 'object' },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
      },
    },
    paths: {
      '/users': {
        get: {
          summary: 'List all users',
          tags: ['Users'],
          parameters: [
            { name: 'page', in: 'query', schema: { type: 'integer', default: 1 } },
            { name: 'limit', in: 'query', schema: { type: 'integer', default: 50 } },
          ],
          responses: {
            '200': {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    allOf: [
                      { $ref: '#/components/schemas/ApiResponse' },
                      {
                        type: 'object',
                        properties: {
                          data: {
                            type: 'array',
                            items: { $ref: '#/components/schemas/User' },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
            '401': {
              description: 'Unauthorized',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ErrorResponse' },
                },
              },
            },
          },
        },
        post: {
          summary: 'Create a new user',
          tags: ['Users'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['email', 'name'],
                  properties: {
                    email: { type: 'string', format: 'email' },
                    name: { type: 'string' },
                    username: { type: 'string' },
                    timezone: { type: 'string' },
                    booking_duration: { type: 'integer' },
                  },
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'User created',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ApiResponse' },
                },
              },
            },
          },
        },
      },
      '/bookings': {
        get: {
          summary: 'List bookings with filters',
          tags: ['Bookings'],
          parameters: [
            { name: 'userId', in: 'query', schema: { type: 'string' } },
            { name: 'startDate', in: 'query', schema: { type: 'string' } },
            { name: 'endDate', in: 'query', schema: { type: 'string' } },
            { name: 'status', in: 'query', schema: { type: 'string', enum: ['confirmed', 'cancelled', 'pending'] } },
            { name: 'page', in: 'query', schema: { type: 'integer' } },
            { name: 'limit', in: 'query', schema: { type: 'integer' } },
          ],
          responses: {
            '200': {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    allOf: [
                      { $ref: '#/components/schemas/ApiResponse' },
                      {
                        type: 'object',
                        properties: {
                          data: {
                            type: 'array',
                            items: { $ref: '#/components/schemas/Booking' },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        post: {
          summary: 'Create a new booking',
          tags: ['Bookings'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['user_id', 'guest_name', 'guest_email', 'start_time', 'end_time'],
                  properties: {
                    user_id: { type: 'string', format: 'uuid' },
                    guest_name: { type: 'string' },
                    guest_email: { type: 'string', format: 'email' },
                    start_time: { type: 'string', format: 'date-time' },
                    end_time: { type: 'string', format: 'date-time' },
                    notes: { type: 'string' },
                  },
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Booking created',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ApiResponse' },
                },
              },
            },
            '409': {
              description: 'Time slot conflict',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ErrorResponse' },
                },
              },
            },
          },
        },
      },
      '/availability/slots': {
        post: {
          summary: 'Get available time slots for a user on a specific date',
          tags: ['Availability'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['user_id', 'date'],
                  properties: {
                    user_id: { type: 'string', format: 'uuid' },
                    date: { type: 'string', format: 'date' },
                  },
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    allOf: [
                      { $ref: '#/components/schemas/ApiResponse' },
                      {
                        type: 'object',
                        properties: {
                          data: {
                            type: 'array',
                            items: { $ref: '#/components/schemas/TimeSlot' },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
        },
      },
    },
  }

  return NextResponse.json(documentation)
}