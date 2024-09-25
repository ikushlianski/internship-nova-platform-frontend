// Enums
export enum MeetingKindEnum {
  LESSON = 'LESSON',
  WORKSHOP = 'WORKSHOP',
  EXAM = 'EXAM',
  INTRO_CALL = 'INTRO_CALL',
  OUTRO_CALL = 'OUTRO_CALL',
  SPEAKING_CLUB_LESSON = 'SPEAKING_CLUB_LESSON',
  OTHER = 'OTHER',
}

export enum ClassSizesEnum {
  INDIVIDUAL = 'INDIVIDUAL',
  GROUP_2_4 = 'GROUP_2_4',
  GROUP_5_8 = 'GROUP_5_8',
  GROUP_9_12 = 'GROUP_9_12',
}

// Models
export interface CourseStructure {
  course_id: string; // Identifier for the course
  module_id: number; // Identifier for the module
  section_id: number; // Identifier for the section
  lesson_id: number; // Identifier for the lesson
  course: Course; // Relation to Course
  module: Module; // Relation to Module
  section: Section; // Relation to Section
  lesson: Lesson; // Relation to Lesson
}

export interface Class {
  class_id: string; // Unique identifier for the class
  class_code?: string; // Optional class code
  course_id: string; // Identifier for the associated course
  start_date: Date; // Start date of the class
  end_date?: Date; // Optional end date of the class
  tuition_lang_code: string; // Language code for tuition
  time_of_day_id: string; // Identifier for the time of day
  start_time_gmt3: string; // Start time in GMT+3
  class_size_id: ClassSize; // Relation to ClassSize
  created_date?: Date; // Optional creation date
  updated_date?: Date; // Optional update date
  deleted?: boolean; // Soft delete flag
  is_instance_of_course: Course; // Relation to Course
  time_of_day: TimeOfDay; // Relation to TimeOfDay
  tuition_lang: TuitionLang; // Relation to TuitionLang
  mentor_classes: MentorsClasses[]; // Relation to MentorsClasses
  students: Student[]; // Relation to Student
  booking_requests: BookingRequest[]; // Relation to BookingRequest
  class_calls: ClassCall[]; // Relation to ClassCall
  classSizeClass_size_id: string; // Identifier for ClassSize
  ClassTask: ClassTask[]; // Relation to ClassTask
}

export interface ClassCall {
  class_call_id: string; // Unique identifier for the class call
  class_id: string; // Identifier for the associated class
  call_date: Date; // Date of the call
  created_date?: Date; // Optional creation date
  updated_date?: Date; // Optional update date
  deleted?: boolean; // Soft delete flag
  meeting_kind_id: string; // Identifier for the meeting kind
  class: Class; // Relation to Class
  meeting_kind: MeetingKind; // Relation to MeetingKind
}

export interface ClassSize {
  class_size_id: string; // Unique identifier for the class size
  class_size_name: ClassSizesEnum; // Enum for class size
  classes: Class[]; // Relation to Class
  MentorPayModel: MentorPayModel[]; // Relation to MentorPayModel
}

export interface Course {
  course_code: string; // Unique identifier for the course
  course_name?: string; // Optional course name
  course_level_id: string; // Identifier for the course level
  created_date?: Date; // Optional creation date
  subject_code: string; // Identifier for the subject
  course_level: CourseLevel; // Relation to CourseLevel
  course_advice: CourseAdvice[]; // Relation to CourseAdvice
  classes: Class[]; // Relation to Class
  subject?: Subject; // Optional relation to Subject
  CourseStructure: CourseStructure[]; // Relation to CourseStructure
  CourseTask: CourseTask[]; // Relation to CourseTask
  Module: Module[]; // Relation to Module
  LessonCard: LessonCard[]; // Relation to LessonCard
}

export interface CourseAdvice {
  advice_id: string; // Unique identifier for the advice
  course_code: string; // Identifier for the associated course
  advice_text?: string; // Optional advice text
  last_used_date?: string; // Optional last used date
  created_date: string; // Creation date
  course: Course; // Relation to Course
}

export interface CourseTask {
  course_task_id: string; // Unique identifier for the course task
  course_id: string; // Identifier for the associated course
  module_id: number; // Identifier for the module
  section_id: number; // Identifier for the section
  lesson_id: number; // Identifier for the lesson
  task_id: number; // Identifier for the task
  question: string; // Question for the task
  course: Course; // Relation to Course
  module: Module; // Relation to Module
  section: Section; // Relation to Section
  lesson: Lesson; // Relation to Lesson
  task: Task; // Relation to Task
  ClassTask: ClassTask[]; // Relation to ClassTask
}

export interface CourseLevel {
  course_level_id: string; // Unique identifier for the course level
  course_level_name: string; // Name of the course level
  course: Course[]; // Relation to Course
  CourseLevelsPerSubject: CourseLevelsPerSubject[]; // Relation to CourseLevelsPerSubject
}

export interface Subject {
  subject_code: string; // Unique identifier for the subject
  subject_name: string; // Name of the subject
  Course: Course[]; // Relation to Course
  CourseLevelsPerSubject: CourseLevelsPerSubject[]; // Relation to CourseLevelsPerSubject
}

export interface CourseLevelsPerSubject {
  course_level_id: string; // Identifier for the course level
  subject_code: string; // Identifier for the subject
  course_level: CourseLevel; // Relation to CourseLevel
  subject: Subject; // Relation to Subject
}

// Models
export interface Lesson {
  lesson_id: number; // Unique identifier for the lesson
  lesson_name: string; // Unique name of the lesson
  lesson_description?: string; // Optional description of the lesson
  lesson_order: number; // Order of the lesson
  created_date?: Date; // Optional creation date
  updated_date?: Date; // Optional update date
  deleted?: boolean; // Soft delete flag
  section_id: number; // Identifier for the associated section
  section: Section; // Relation to Section
  tasks: Task[]; // Relation to Task
  CourseStructure: CourseStructure[]; // Relation to CourseStructure
  CourseTask: CourseTask[]; // Relation to CourseTask
  Module?: Module; // Optional relation to Module
  moduleModule_id?: number; // Optional module ID
  LessonCard: LessonCard[]; // Relation to LessonCard
  UserCard: UserCard[]; // Relation to UserCard
}

export interface Mentor {
  mentor_id: string; // Unique identifier for the mentor
  user_id: string; // Identifier for the associated user
  mentor_description_en?: string; // Optional description in English
  created_date?: Date; // Optional creation date
  updated_date?: Date; // Optional update date
  deleted?: boolean; // Soft delete flag
  user: User; // Relation to User
  mentor_classes: MentorsClasses[]; // Relation to MentorsClasses
  MentorPayModel: MentorPayModel[]; // Relation to MentorPayModel
}

export interface MentorsClasses {
  mentor_id: string; // Identifier for the associated mentor
  class_id: string; // Identifier for the associated class
  created_date?: Date; // Optional creation date
  updated_date?: Date; // Optional update date
  deleted?: boolean; // Soft delete flag
  mentor: Mentor; // Relation to Mentor
  class: Class; // Relation to Class
}

export interface MentorPayModel {
  mentor_id: string; // Identifier for the associated mentor
  class_size_id: string; // Identifier for the associated class size
  start_date: Date; // Start date for the payment model
  pay_rate_per_hour: number; // Pay rate per hour in USD
  created_date?: Date; // Optional creation date
  end_date?: Date; // Optional end date
  deleted?: boolean; // Soft delete flag
  mentor: Mentor; // Relation to Mentor
  class_size: ClassSize; // Relation to ClassSize
}

export interface Module {
  module_id: number; // Unique identifier for the module
  module_name: string; // Unique name of the module
  module_description?: string; // Optional description of the module
  module_order: number; // Order of the module
  created_date?: Date; // Optional creation date
  updated_date?: Date; // Optional update date
  deleted?: boolean; // Soft delete flag
  course_id: string; // Identifier for the associated course
  course: Course; // Relation to Course
  sections: Section[]; // Relation to Section
  lessons: Lesson[]; // Relation to Lesson
  CourseStructure: CourseStructure[]; // Relation to CourseStructure
  CourseTask: CourseTask[]; // Relation to CourseTask
}

export interface Section {
  section_id: number; // Unique identifier for the section
  section_name: string; // Unique name of the section
  section_description?: string; // Optional description of the section
  section_order: number; // Order of the section
  created_date?: Date; // Optional creation date
  updated_date?: Date; // Optional update date
  deleted?: boolean; // Soft delete flag
  module_id: number; // Identifier for the associated module
  module: Module; // Relation to Module
  CourseStructure: CourseStructure[]; // Relation to CourseStructure
  CourseTask: CourseTask[]; // Relation to CourseTask
  Lesson: Lesson[]; // Relation to Lesson
}

export interface TimeOfDay {
  time_of_day_id: string; // Unique identifier for the time of day
  time_of_day_name: string; // Unique name for the time of day
  classes: Class[]; // Relation to Class
}

export interface TuitionLang {
  tuition_lang_code: string; // Unique identifier for the tuition language
  tuition_lang_name: string; // Unique name for the tuition language
  classes: Class[]; // Relation to Class
}

// Models
export interface Deck {
  deck_id: string; // Unique identifier for the deck
  user_id: string; // Identifier for the associated user
  deck_description?: string; // Optional description of the deck
  user: User; // Relation to User
  Card: LessonCard[]; // Relation to LessonCard
}

export interface LessonCard {
  card_id: string; // Unique identifier for the card
  deck_id: string; // Identifier for the associated deck
  question: string; // Question for the card
  answer: string; // Answer for the card
  example?: string; // Optional example for the card
  course_code: string; // Identifier for the associated course
  lesson_id: number; // Identifier for the associated lesson
  deck: Deck; // Relation to Deck
  course: Course; // Relation to Course
  lesson: Lesson; // Relation to Lesson
}

export interface UserCard {
  user_card_id: string; // Unique identifier for the user card
  user_id: string; // Identifier for the associated user
  question: string; // Question for the user card
  answer: string; // Answer for the user card
  example?: string; // Optional example for the user card
  lesson_id?: number; // Optional identifier for the associated lesson
  user: User; // Relation to User
  lesson?: Lesson; // Optional relation to Lesson
}

export interface Vocabulary {
  vocabulary_id: string; // Unique identifier for the vocabulary
  user_id: string; // Identifier for the associated user
}

export interface VocabularyInbox {
  user_id: string; // Identifier for the associated user
  question: string; // Question for the vocabulary inbox
  answer: string; // Answer for the vocabulary inbox
  user: User; // Relation to User
}

// Models
export interface User {
  user_email: string; // Unique identifier for the user
  created_at: Date; // Creation date
  updated_at?: Date; // Optional update date
  user_roles: UserRole[]; // Relation to UserRole
  first_name: string; // First name of the user
  last_name: string; // Last name of the user
  nickname?: string; // Optional nickname
  deleted?: boolean; // Soft delete flag
  user_application_preferences: UserApplicationPreferences[]; // Relation to UserApplicationPreferences
  mentor: Mentor[]; // Relation to Mentor
  is_student_of: Student[]; // Relation to Student
  DataRemovalRequest: DataRemovalRequest[]; // Relation to DataRemovalRequest
  Deck: Deck[]; // Relation to Deck
  UserCard: UserCard[]; // Relation to UserCard
  VocabularyInbox: VocabularyInbox[]; // Relation to VocabularyInbox
}

export interface Role {
  role_id: string; // Unique identifier for the role
  role_name?: string; // Optional name of the role
  role_description?: string; // Optional description of the role
  user_roles: UserRole[]; // Relation to UserRole
}

export interface UserRole {
  user_email: string; // Identifier for the associated user
  role_id: string; // Identifier for the associated role
  user: User; // Relation to User
  role: Role; // Relation to Role
}

export interface UserApplicationPreferences {
  user_email: string; // Identifier for the associated user
  application_id: string; // Identifier for the associated application
  accepted_privacy_policy: boolean; // Whether the privacy policy is accepted
  accepted_cookies_policy: boolean; // Whether the cookies policy is accepted
  user: User; // Relation to User
  application: Application; // Relation to Application
}

// Enums
export enum DataRemovalStatusEnum {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

// Models
export interface Application {
  application_id: string; // Unique identifier for the application
  application_name: string; // Name of the application
  application_description?: string; // Optional description of the application
  application_url?: string; // Optional URL for the application
  user_application_preferences: UserApplicationPreferences[]; // Relation to UserApplicationPreferences
}

export interface DataRemovalRequest {
  data_removal_request_id: number; // Unique identifier for the data removal request
  user_email: string; // Identifier for the associated user
  data_removal_request: string; // Description of the data removal request
  data_removal_status: DataRemovalStatusEnum; // Status of the data removal request
  data_removal_date: Date; // Date of the data removal request
  user: User; // Relation to User
}

export interface MeetingKind {
  meeting_kind_id: string; // Unique identifier for the meeting kind
  meeting_kind_name: string; // Unique name of the meeting kind
  class_calls: ClassCall[]; // Relation to ClassCall
}

// Enums
export enum StudentTaskStatus {
  PENDING = 'PENDING',
  BLOCKED = 'BLOCKED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

// Models
export interface ClassTask {
  class_task_id: number; // Unique identifier for the class task
  course_task_id: string; // Identifier for the associated course task
  class_id: string; // Identifier for the associated class
  course_task: CourseTask; // Relation to CourseTask
  class: Class; // Relation to Class
  student_tasks: StudentTask[]; // Relation to StudentTask
  student_answer: StudentAnswer[]; // Relation to StudentAnswer
}

export interface Student {
  student_id: string; // Unique identifier for the student
  user_id: string; // Identifier for the associated user
  student_nickname?: string; // Optional nickname for the student
  enrolled_date?: Date; // Optional enrollment date
  left_date?: Date; // Optional left date
  created_date?: Date; // Optional creation date
  updated_date?: Date; // Optional update date
  deleted?: boolean; // Soft delete flag
  class_id: string; // Identifier for the associated class
  user: User; // Relation to User
  class: Class; // Relation to Class
  student_task: StudentTask[]; // Relation to StudentTask
  student_answers: StudentAnswer[]; // Relation to StudentAnswer
}

export interface StudentAnswer {
  student_answer_id: number; // Unique identifier for the student answer
  student_id: string; // Identifier for the associated student
  class_task_id: number; // Identifier for the associated class task
  answer: string; // Answer given by the student
  student: Student; // Relation to Student
  class_task: ClassTask; // Relation to ClassTask
}

export interface StudentTask {
  student_task_id: number; // Unique identifier for the student task
  student_id: string; // Identifier for the associated student
  class_task_id: number; // Identifier for the associated class task
  task_status: StudentTaskStatus; // Status of the student task
  student: Student; // Relation to Student
  class_task: ClassTask; // Relation to ClassTask
}

export interface Task {
  task_id: number; // Unique identifier for the task
  task_description?: string; // Optional instruction for the task
  task_text?: string; // Optional actual task text
  task_type_id: number; // Identifier for the task type
  task_context_id: string; // Identifier for the task context
  task_form_id?: number; // Optional identifier for the task form
  task_created_date?: Date; // Optional creation date
  task_updated_date?: Date; // Optional update date
  deleted?: boolean; // Soft delete flag
  lesson_id: number; // Identifier for the associated lesson
  gap_map?: string; // Optional gap map
  task_type: TaskType; // Relation to TaskType
  task_context: TaskContext; // Relation to TaskContext
  lesson: Lesson; // Relation to Lesson
  task_forms: TaskForm[]; // Relation to TaskForm
  task_options: TaskOption[]; // Relation to TaskOption
  CourseTask: CourseTask[]; // Relation to CourseTask
}

export interface TaskForm {
  task_form_id: number; // Unique identifier for the task form
  task_form_name: string; // Name of the task form
  task_form_description?: string; // Optional description of the task form
  task: Task[]; // Relation to Task
}

export interface TaskContext {
  task_context_id: string; // Unique identifier for the task context
  task_context_name: string; // Name of the task context
  task_context_description?: string; // Optional description of the task context
  task: Task[]; // Relation to Task
}

export interface TaskOption {
  task_option_id: number; // Unique identifier for the task option
  task_id: number; // Identifier for the associated task
  task_option_text: string; // Text for the task option
  task_option_order?: number; // Optional order of the task option
  is_correct: boolean; // Indicates if the option is correct
  task: Task; // Relation to Task
}

export interface TaskType {
  task_type_id: number; // Unique identifier for the task type
  task_type_name: string; // Name of the task type
  task_type_description?: string; // Optional description of the task type
  task: Task[]; // Relation to Task
}
// Enums
export enum BookingRequestStatus {
  PENDING = 'PENDING',
  NEGOTIATING = 'NEGOTIATING',
  ASSIGNED = 'ASSIGNED',
  REJECTED = 'REJECTED',
  LOST = 'LOST',
}

// Models
export interface BookingRequest {
  booking_request_id: string; // Unique identifier for the booking request
  class_id: string; // Identifier for the associated class
  booking_date: Date; // Date of the booking request
  booking_request_status: BookingRequestStatus; // Status of the booking request
  user_stated_name?: string; // Optional name provided by the user
  user_stated_phone?: string; // Optional phone number provided by the user
  user_stated_email?: string; // Optional email address provided by the user
  user_stated_telegram_nickname?: string; // Optional Telegram nickname provided by the user
  class: Class; // Relation to Class
}
